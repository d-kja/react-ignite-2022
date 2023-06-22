import { ReactNode, useCallback, useEffect, useReducer, useRef } from 'react'
import { createContext, useContextSelector } from 'use-context-selector'
import { api } from '../../lib/axios'
import { Transaction } from './@types/transactions'
import {
  addTransactionAction,
  setInitialDataTransactionAction,
} from './helper/actions'
import { transactionsReducer } from './helper/reducer'

type CreateTransactionType = {
  category: string
  description: string
  price: number
  type: 'income' | 'outcome'
}

interface TransactionsContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionType) => Promise<void>
}

type TransactionsContextKeys = keyof TransactionsContextType

interface TransactionProviderProps {
  children: ReactNode
}

const TransactionsContext = createContext({} as TransactionsContextType)

export const TransactionsProvider = ({
  children,
}: TransactionProviderProps) => {
  const [transactions, transactionsDispatch] = useReducer(
    transactionsReducer,
    [],
  )

  const isMounted = useRef(false)

  const createTransaction = useCallback(async (data: CreateTransactionType) => {
    const { category, description, price, type } = data

    const response = await api.post('/transactions', {
      description,
      price,
      type,
      category,
      createdAt: new Date(),
    })

    transactionsDispatch(addTransactionAction(response.data))
  }, [])

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    transactionsDispatch(setInitialDataTransactionAction(response.data))
  }, [])

  useEffect(() => {
    isMounted.current = true

    if (isMounted.current) {
      fetchTransactions()
    }

    return () => {
      isMounted.current = false
    }
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = (watch: TransactionsContextKeys[]) =>
  useContextSelector(TransactionsContext, (context) => {
    const keysToWatch = watch?.reduce((acc, item) => {
      return { ...acc, [item]: context[item] }
    }, {} as TransactionsContextType)

    return keysToWatch
  })
