import React from 'react'
import LoginButton from './LoginButton'
import RegisterButton from './RegisterButton'

const Navbar = () => {
  return (
    <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
    </div>
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a>Create Post</a></li>
    </ul>
  </div>
  <div className="flex space-x-2 navbar-end">
              <LoginButton />
              <RegisterButton />
            </div>
  
</div>
  )
}

export default Navbar