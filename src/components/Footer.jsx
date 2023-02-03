import React from 'react'

export const Footer = () => {
  return (
    <div className='flex flex-row justify-between absolute bottom-0 w-full px-3 sm:px-5 pb-3 z-50'>
      <div className="flex flex-row justify-between space-x-1 md:space-x-5">
        <a href="https://www.linkedin.com/in/filip-szcz%C4%99ch-678262234/" rel="noreferrer noreferrer" target="_blank">
          <svg className='hover:scale-105 my-hover-effect' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="32" height="32"
                viewBox="0 0 16 16"
                style={{fill: "#000A67"}}>
                <path d="M 2.757813 1 C 1.792969 1 1 1.792969 1 2.757813 L 1 12.246094 C 1 13.207031 1.792969 14 2.757813 14 L 12.246094 14 C 13.207031 14 14 13.207031 14 12.246094 L 14 2.757813 C 14 1.792969 13.207031 1 12.246094 1 Z M 2.757813 2 L 12.246094 2 C 12.667969 2 13 2.332031 13 2.757813 L 13 12.246094 C 13 12.667969 12.667969 13 12.246094 13 L 2.757813 13 C 2.332031 13 2 12.667969 2 12.246094 L 2 2.757813 C 2 2.332031 2.332031 2 2.757813 2 Z M 4 3 C 3.449219 3 3 3.449219 3 4 C 3 4.550781 3.449219 5 4 5 C 4.550781 5 5 4.550781 5 4 C 5 3.449219 4.550781 3 4 3 Z M 3 6 L 3 12 L 5 12 L 5 6 Z M 6 6 L 6 12 L 8 12 L 8 9.320313 C 8 8.488281 8.078125 7.742188 9.078125 7.742188 C 10.0625 7.742188 10 8.636719 10 9.375 L 10 12 L 12 12 L 12 9.039063 C 12 7.320313 11.640625 6 9.691406 6 C 8.753906 6 8.28125 6.375 8.023438 6.875 L 8 6.875 L 8 6 Z"></path>
          </svg>
        </a>
        <a href="https://github.com/filipszczech/whatsNew" rel="noreferrer noreferrer" target="_blank">
          <svg className='hover:scale-105 my-hover-effect' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="32" height="32"
                viewBox="0 0 16 16"
                style={{fill: "#000A67"}}>
                <path d="M 7.5 1 C 3.910156 1 1 3.90625 1 7.488281 C 1 10.355469 2.863281 12.789063 5.445313 13.648438 C 5.769531 13.707031 6 13.375 6 13.125 C 6 12.972656 6.003906 12.789063 6 12.25 C 4.191406 12.640625 3.625 11.375 3.625 11.375 C 3.328125 10.625 2.96875 10.410156 2.96875 10.410156 C 2.378906 10.007813 3.011719 10.019531 3.011719 10.019531 C 3.664063 10.0625 4 10.625 4 10.625 C 4.5 11.5 5.628906 11.414063 6 11.25 C 6 10.851563 6.042969 10.5625 6.152344 10.378906 C 4.109375 10.019531 2.996094 8.839844 3 7.207031 C 3.003906 6.242188 3.335938 5.492188 3.875 4.9375 C 3.640625 4.640625 3.480469 3.625 3.960938 3 C 5.167969 3 5.886719 3.871094 5.886719 3.871094 C 5.886719 3.871094 6.453125 3.625 7.496094 3.625 C 8.542969 3.625 9.105469 3.859375 9.105469 3.859375 C 9.105469 3.859375 9.828125 3 11.035156 3 C 11.515625 3.625 11.355469 4.640625 11.167969 4.917969 C 11.683594 5.460938 12 6.210938 12 7.207031 C 12 8.839844 10.890625 10.019531 8.851563 10.375 C 8.980469 10.570313 9 10.84375 9 11.25 C 9 12.117188 9 12.910156 9 13.125 C 9 13.375 9.226563 13.710938 9.558594 13.648438 C 12.140625 12.785156 14 10.355469 14 7.488281 C 14 3.90625 11.089844 1 7.5 1 Z"></path>
          </svg>
        </a>
      </div>
      <div className='text-sm sm:text-base xl:text-lg text-gray-600'>
        Projekt stworzony w ramach realizacji pracy dyplomowej, nie w celach komercyjnych.
      </div>
      <div class="hidden md:flex text-sm sm:text-base xl:text-lg text-gray-700 font-semibold my-navy-font">
        <a href="https://www.newsapi.ai/" rel="noreferrer noreferrer" target="_blank"><p className='mr-8 hover:scale-105 my-hover-effect'>News Api</p></a>
        <span className='hover:scale-105 my-hover-effect'>wersja Vue</span>
      </div>
    </div>
  )
}
