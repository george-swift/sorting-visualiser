import { useEffect, useState, useMemo, useRef } from 'react'
import { LESSONS, cn, rand } from '@/utils'
import { PlayIcon, ResetIcon } from '@/components/icons'
import { insertionSort } from '@/lib/insertionSort'
import { mergeSort } from '@/lib/mergeSort'
import { quickSort } from '@/lib/quickSort'
import { heapSort } from '@/lib/heapSort'

const MIN_HEIGHT = 5
const MAX_HEIGHT = 400
const ANIMATION_SPEED = 3
const PRIMARY_COLOR = 'turquoise'
const SECONDARY_COLOR = 'red'
const SORTED_COLOR = 'goldenrod'

const VisualiserButton = ({ disabled, onClick, children }) => (
  <button
    className={cn(
      'px-1.5 py-1 border-0 rounded-md focus:outline-none disabled:opacity-50',
      { 'hover:bg-gray-100': !disabled }
    )}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)

export const Visualiser = ({ lesson }) => {
  const containerRef = useRef(null)
  const vsxBars = containerRef.current?.children

  const [list, setList] = useState([])
  const [isSorting, setIsSorting] = useState(false)
  const [isSorted, setIsSorted] = useState(false)

  const totalBarsInVSX = useMemo(() => {
    const width = containerRef?.current?.offsetWidth

    switch (true) {
      case width < 350:
        return Math.floor(width / 6.5)

      case width < 500:
        return Math.floor(width / 6)

      default:
        return 120
    }
  }, [containerRef])

  const generateNewList = () => {
    if (isSorted) {
      for (let i = 0; i < vsxBars.length; i += 1) {
        const { style } = vsxBars[i]
        style.backgroundColor = PRIMARY_COLOR
      }
    }

    setIsSorted(false)
    setList(_ => {
      const _list = []
      for (let i = 0; i < totalBarsInVSX; i += 1) {
        _list.push(rand(MIN_HEIGHT, MAX_HEIGHT))
      }
      return _list
    })
  }

  const changeBgColor = (list, [index, color]) => {
    const { style: barStyle } = list[index]
    barStyle.backgroundColor = color
  }

  const changeHeight = (list, [index, height]) => {
    const { style: barStyle } = list[index]
    barStyle.height = `${height}px`
  }

  const animateIndex = (list, ...indexes) => {
    indexes.forEach(index => {
      setTimeout(() => {
        changeBgColor(list, [index, SECONDARY_COLOR])
      }, ANIMATION_SPEED)
      setTimeout(() => {
        changeBgColor(list, [index, PRIMARY_COLOR])
      }, ANIMATION_SPEED * 3)
    })
  }

  const animateAfterSorting = () => {
    for (let i = 0; i < vsxBars.length; i += 1) {
      const { style } = vsxBars[i]
      setTimeout(() => {
        style.backgroundColor = SORTED_COLOR
      }, i * ANIMATION_SPEED)
    }

    setTimeout(() => {
      setIsSorting(false)
      setIsSorted(true)
    }, vsxBars.length * ANIMATION_SPEED)
  }

  const visualiseByIndex = list => {
    setIsSorting(true)

    list.forEach(([comparison, swapped], index) => {
      setTimeout(() => {
        if (!swapped) {
          const [i] = comparison
          if (comparison.length === 2) {
            const [, j] = comparison
            animateIndex(vsxBars, i, j)
          } else animateIndex(vsxBars, i)
        } else changeHeight(vsxBars, comparison)
      }, index * ANIMATION_SPEED)
    })
    setTimeout(() => animateAfterSorting(), list.length * ANIMATION_SPEED)
  }

  const animateHeap = (list, heap, index) => {
    const [left, right, leftHeight, rightHeight] = heap

    if (leftHeight >= 0) {
      setTimeout(() => {
        changeHeight(list, [left, rightHeight])
        changeHeight(list, [right, leftHeight])
        changeBgColor(list, [left, PRIMARY_COLOR])
        changeBgColor(list, [right, SECONDARY_COLOR])
      }, index * ANIMATION_SPEED)
    }

    setTimeout(
      () => {
        changeBgColor(list, [left, PRIMARY_COLOR])
        changeBgColor(list, [right, SECONDARY_COLOR])
      },
      index * ANIMATION_SPEED + 1
    )

    setTimeout(
      () => {
        changeBgColor(list, [left, PRIMARY_COLOR])
        changeBgColor(list, [right, PRIMARY_COLOR])
      },
      index * ANIMATION_SPEED + 3
    )
  }

  const visualiseByHeap = list => {
    setIsSorting(true)

    list.forEach((heap, index) => animateHeap(vsxBars, heap, index))
    setTimeout(() => animateAfterSorting(), list.length * ANIMATION_SPEED)
  }

  const disableVSX = lesson === LESSONS.Introduction

  const visualiserFns = {
    [LESSONS.InsertionSort]: () => visualiseByIndex(insertionSort(list)),
    [LESSONS.MergeSort]: () => visualiseByIndex(mergeSort(list)),
    [LESSONS.QuickSort]: () => visualiseByIndex(quickSort(list)),
    [LESSONS.HeapSort]: () => visualiseByHeap(heapSort(list))
  }

  const playVSX = _ => {
    if (!disableVSX) visualiserFns[lesson]?.()
  }

  useEffect(() => generateNewList(), [lesson])

  return (
    <>
      <div className="flex justify-end p-1.5 gap-x-2 bg-white/90 border-y border-gray-200">
        <VisualiserButton
          onClick={playVSX}
          disabled={isSorting || isSorted || disableVSX}
        >
          <PlayIcon />
        </VisualiserButton>

        <VisualiserButton
          onClick={() => generateNewList()}
          disabled={isSorting || disableVSX}
        >
          <ResetIcon />
        </VisualiserButton>
      </div>
      <div className="py-10 grow bg-zinc-900 rounded-b-md">
        <div
          className="m-auto flex items-end justify-center h-full w-full"
          ref={containerRef}
        >
          {list.map((value, index) => (
            <div
              className="w-0.5 mx-px"
              key={index}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`
              }}
            />
          ))}
        </div>
      </div>
    </>
  )
}
