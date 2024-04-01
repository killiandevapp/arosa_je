import { Fragment, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import Reglage from '../reglages/reglages'
import { Link } from 'react-router-dom'
import Logo from '../images/22.png'
// import { showCurrentPage } from '../redux/action/currentPage'
// import store from '../redux/store'


const navigation = [
  { name: 'Patient', href: '/info', current: true },
  { name: 'Blog', href: '/infoBlog', current: false },
  { name: 'Stock', href: '/stock', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbarv2({ pageAcutelle }) {
  useEffect(() => {
    navigation.map((item) => {
      if (item.name === pageAcutelle) {
        item.current = true;
      } else {
        item.current = false;
      }
    })
  }, [])
  return (
    <Disclosure as="nav" className="bg-white shadow-xl sticky top-0 z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-sky-200 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Ouvrir le menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">

                  <Link to='/info'>
                    <img
                      className="h-6"
                      src={Logo}
                      alt="ISIS"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                     
                      <> 
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-[#1791EE] text-white underline' : 'text-gray-800 hover:underline hover:bg-sky-200 hover:text-gray-600',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={
                            () => {
                              // store.dispatch(showCurrentPage(item.name));
                              item.current ='page' 
                            }
                          }
                        >
                          {item.name}
                        </a>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <Reglage /> */}

              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-[#1791EE] text-white underline' : 'text-gray-800 hover:underline hover:bg-sky-200 hover:text-gray-600',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}