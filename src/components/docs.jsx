import { useCallback } from 'react'
import Introduction from '@/articles/introduction.mdx'
import InsertionSort from '@/articles/insertion-sort.mdx'
import MergeSort from '@/articles/merge-sort.mdx'
import QuickSort from '@/articles/quick-sort.mdx'
import HeapSort from '@/articles/heap-sort.mdx'
import { LESSONS } from '@/utils'

export const Docs = ({ lesson }) => {
  const renderContent = useCallback(lesson => {
    switch (lesson) {
      case LESSONS.Introduction:
        return <Introduction />

      case LESSONS.InsertionSort:
        return <InsertionSort />

      case LESSONS.MergeSort:
        return <MergeSort />

      case LESSONS.QuickSort:
        return <QuickSort />

      case LESSONS.HeapSort:
        return <HeapSort />

      default:
        return null
    }
  }, [])

  return (
    <div className="p-4 space-y-8 [&_h2]:text-lg [&_h2]:font-bold [&_p]:text-gray-500 [&_span]:font-medium">
      {renderContent(lesson)}
    </div>
  )
}
