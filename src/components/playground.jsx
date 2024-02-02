import { useState } from 'react'
import { CommandLineIcon, DocumentIcon } from '@/components/icons'
import { Panel } from '@/components/panel'
import { Steps } from '@/components/steps'
import { Docs } from '@/components/docs'
import { Visualiser } from '@/components/visualiser'
import { LESSONS } from '@/utils'

export const Playground = () => {
  const [steps, setSteps] = useState([
    { id: 1, name: LESSONS.Introduction, current: true },
    { id: 2, name: LESSONS.InsertionSort, current: false },
    { id: 3, name: LESSONS.MergeSort, current: false },
    { id: 4, name: LESSONS.QuickSort, current: false },
    { id: 5, name: LESSONS.HeapSort, current: false }
  ])

  const { name: currentStep } = steps.find(({ current }) => current)

  const onStepChange = stepIdx => _ =>
    setSteps(prev =>
      prev.map((step, idx) => ({
        ...step,
        current: idx === stepIdx ? !step.current : false
      }))
    )

  return (
    <div className="grid grid-cols-1 mx-auto w-full max-w-7xl gap-2 my-5 px-1 text-gray-600 *:bg-white/90 *:rounded-md *:ring-1 *:ring-zinc-900/5 md:grid-cols-2 xl:px-0">
      <Panel>
        <Panel.Title>
          <DocumentIcon />
          Documentation
        </Panel.Title>
        <Panel.Body>
          <Steps items={steps} onClick={onStepChange} />
          <Docs lesson={currentStep} />
        </Panel.Body>
      </Panel>
      <Panel>
        <Panel.Title>
          <CommandLineIcon />
          Playground
        </Panel.Title>
        <Panel.Body className="flex flex-col">
          <Visualiser key={currentStep} lesson={currentStep} />
        </Panel.Body>
      </Panel>
    </div>
  )
}
