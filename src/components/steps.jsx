import { cn } from '@/utils'

export const Steps = ({ items, onClick }) => (
  <ol
    role="list"
    className="sticky top-0 bg-white/90 divide-y divide-gray-200 border-y border-gray-200 xl:flex xl:divide-y-0"
  >
    {items.map(({ id, name, current }, index) => (
      <li
        key={name}
        className={cn('relative xl:flex xl:flex-1', {
          'cursor-pointer': !current
        })}
        {...(!current && { onClick: onClick(index) })}
      >
        <div
          className={cn('flex items-center p-2 text-xs font-medium', {
            group: !current
          })}
        >
          <span
            className={cn(
              'flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2',
              current
                ? 'border-blue-600'
                : 'border-gray-300 group-hover:border-gray-400'
            )}
          >
            <span
              className={cn(
                current
                  ? 'text-blue-600'
                  : 'text-gray-500 group-hover:text-gray-900'
              )}
            >
              {id}
            </span>
          </span>
          <span
            className={cn(
              'ml-1 text-xs font-medium',
              current
                ? 'text-blue-600'
                : 'text-gray-500 group-hover:text-gray-900'
            )}
          >
            {name}
          </span>
        </div>

        {index !== items.length - 1 && (
          <div className="absolute right-0 top-0 hidden h-full w-5 xl:block">
            <svg
              className="h-full w-full text-gray-200"
              viewBox="0 0 22 80"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 -2L20 40L0 82"
                vectorEffect="non-scaling-stroke"
                stroke="currentcolor"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </li>
    ))}
  </ol>
)
