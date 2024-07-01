import { BentoCard, BentoGrid } from '@/components/bento-grid'
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'
import { AnimatedBeamDemo } from './animated-beam-multi-output'
import { AnimatedList } from './animated-list'
import { Icons } from './icons'
import Marquee from './marquee'

const files = [
  {
    name: 'bitcoin.csv',
    body: 'Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.',
  },
  {
    name: 'finances.csv',
    body: 'A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.',
  },
  {
    name: 'payment.csv',
    body: 'Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.',
  },
  {
    name: 'bank.csv',
    body: 'GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.',
  },
  {
    name: 'assets.csv',
    body: 'A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.',
  },
]

interface Item {
  name: string
  description: string
  icon: string
  color: string
  time: string
}

let notifications = [
  {
    name: 'Payment received',
    description: 'Stashticly',
    time: '15m ago',
    icon: '💸',
    color: '#00C9A7',
  },
  {
    name: 'Payment sent',
    description: 'Stashticly',
    time: '10m ago',
    icon: '👤',
    color: '#FFB800',
  },
  {
    name: 'Transaction created',
    description: 'Stashticly',
    time: '5m ago',
    icon: '💬',
    color: '#FF3D71',
  },
  {
    name: 'Transaction updated',
    description: 'Stashticly',
    time: '4m ago',
    icon: '💬',
    color: '#F77443',
  },
  {
    name: 'Transaction deleted',
    description: 'Stashticly',
    time: '2m ago',
    icon: '🗑️',
    color: '#1E86FF',
  },
]

notifications = Array.from({ length: 10 }, () => notifications).flat()

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        'relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4',
        // animation styles
        'transition-all duration-200 ease-in-out hover:scale-[103%]',
        // light styles
        'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
        // dark styles
        'transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]'
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  )
}

const features = [
  {
    Icon: Icons.fileSpreadsheet,
    name: 'CSV Import',
    description: 'Get started with a few clicks.',
    href: '/',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-1',
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              'relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4',
              'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
              'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
              'transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none'
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Icons.zap,
    name: 'Robust Stack Integration',
    description: 'Fast, simple, secure.',
    href: '/',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <AnimatedBeamDemo className="absolute right-10 top-10 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Icons.radar,
    name: ' Real-Time Notifications',
    description: 'Get notified when a new transaction is added.',
    href: '/',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <AnimatedList className="absolute right-10 top-10 w-[70%] origin-top translate-x-0 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:-translate-x-10">
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    ),
  },
  {
    Icon: Icons.calendar,
    name: 'Calendar',
    description: 'Use the calendar to filter your transaction by date.',
    className: 'col-span-3 lg:col-span-1',
    href: '/',
    cta: 'Learn more',
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
]

export function FeaturesCard() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  )
}
