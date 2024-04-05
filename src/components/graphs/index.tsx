export function Skill() {
  return (
    <section
      className='flex flex-col justify-center   bg-slate-900 py-12'
      id='skill'
    >
      <h2 className='text-3xl flex justify-center underline pb-12 text-white'>
        Mes compétences
      </h2>
      <div className='flex  flex-col gap-10 text-white'>
        <div className='flex flex-col text-center '>
          <h3 className='text-2xl mb-8'>J'ai pu travailler avec :</h3>
          <ul className='flex flex-row justify-center gap-12 max-md:grid max-md:grid-cols-2'>
            <li className='place-self-center gap-2'>
              <p>Html</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='50'
                height='50'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='m3 2l1.578 17.824L12 22l7.467-2.175L21 2zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565l-4.246 1.381l-4.281-1.455l-.288-2.932h2.024l.16 1.411l2.4.815l2.346-.763l.297-3.005H7.416l-.562-6.05h10.412z'
                />
              </svg>
            </li>
            <li className='place-self-center gap-2'>
              <p>CSS</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='50'
                height='50'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='m3 2l1.578 17.834L12 22l7.468-2.165L21 2zm13.3 14.722l-4.293 1.204H12l-4.297-1.204l-.297-3.167h2.108l.15 1.526l2.335.639l2.34-.64l.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506z'
                />
              </svg>
            </li>
            <li className='place-self-center gap-2'>
              <p>JavaScript</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='50'
                height='50'
                viewBox='0 0 15 15'
              >
                <path
                  fill='currentColor'
                  fillRule='evenodd'
                  d='M15 0H0v15h15zM8 8a2 2 0 0 1 2-2h1.167C12.179 6 13 6.82 13 7.833V8h-1v-.167A.833.833 0 0 0 11.167 7H10a1 1 0 0 0 0 2h1a2 2 0 1 1 0 4h-1a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2h-1a2 2 0 0 1-2-2M6 6v5a1 1 0 1 1-2 0H3a2 2 0 1 0 4 0V6z'
                  clipRule='evenodd'
                />
              </svg>
            </li>
            <li className='place-self-center gap-2'>
              <p>React.js</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='50'
                height='50'
                viewBox='0 0 24 24'
              >
                <g fill='none'>
                  <g fill='currentColor' clipPath='url(#akarIconsReactFill0)'>
                    <path d='M24 11.689c0-1.59-1.991-3.097-5.044-4.031c.705-3.111.392-5.587-.988-6.38a2.145 2.145 0 0 0-1.096-.273v1.09c.225 0 .406.045.558.128c.665.382.954 1.834.729 3.703c-.054.46-.142.944-.25 1.438a23.706 23.706 0 0 0-3.106-.533a23.857 23.857 0 0 0-2.035-2.446c1.595-1.482 3.092-2.294 4.11-2.294V1c-1.346 0-3.107.959-4.888 2.622C10.21 1.97 8.448 1.02 7.103 1.02v1.09c1.013 0 2.515.808 4.11 2.28c-.685.72-1.37 1.536-2.021 2.441a22.844 22.844 0 0 0-3.111.538a14.683 14.683 0 0 1-.255-1.418c-.23-1.87.054-3.322.715-3.708c.146-.088.337-.128.562-.128v-1.09c-.41 0-.783.088-1.105.273c-1.375.793-1.683 3.263-.974 6.365C1.981 8.603 0 10.104 0 11.689c0 1.59 1.991 3.097 5.044 4.03c-.705 3.112-.392 5.588.988 6.38c.318.186.69.274 1.1.274c1.346 0 3.107-.959 4.888-2.622c1.78 1.653 3.541 2.602 4.887 2.602a2.18 2.18 0 0 0 1.105-.274c1.375-.792 1.683-3.262.974-6.364C22.019 14.781 24 13.274 24 11.689m-6.37-3.263a22.023 22.023 0 0 1-.66 1.932a26.444 26.444 0 0 0-1.345-2.319c.695.103 1.365.23 2.006.387m-2.24 5.21a25.94 25.94 0 0 1-1.179 1.869a25.453 25.453 0 0 1-4.412.005a25.457 25.457 0 0 1-2.201-3.806a26.064 26.064 0 0 1 2.192-3.82a25.455 25.455 0 0 1 4.411-.006c.406.582.803 1.204 1.184 1.86c.372.64.71 1.29 1.018 1.946a27.41 27.41 0 0 1-1.013 1.952M16.97 13c.264.656.49 1.311.675 1.947c-.64.157-1.316.289-2.015.391A27.044 27.044 0 0 0 16.97 13m-4.96 5.22c-.455-.47-.91-.993-1.36-1.566c.44.02.89.035 1.345.035c.46 0 .915-.01 1.36-.035c-.44.573-.895 1.096-1.345 1.566m-3.64-2.882a22.113 22.113 0 0 1-2.006-.386c.181-.631.406-1.282.66-1.932c.201.39.412.782.642 1.174c.23.391.464.773.704 1.144m3.615-10.18c.455.47.91.993 1.36 1.566c-.44-.02-.89-.035-1.345-.035c-.46 0-.915.01-1.36.035c.44-.573.895-1.096 1.345-1.566M8.365 8.04a27.02 27.02 0 0 0-1.34 2.333a20.96 20.96 0 0 1-.675-1.947c.64-.152 1.316-.284 2.015-.386m-4.427 6.124c-1.732-.738-2.852-1.707-2.852-2.475s1.12-1.742 2.852-2.475c.42-.181.88-.343 1.355-.494c.279.958.646 1.956 1.1 2.979a23.165 23.165 0 0 0-1.085 2.964a14.875 14.875 0 0 1-1.37-.499m2.632 6.99c-.665-.38-.954-1.834-.729-3.702c.054-.46.142-.945.25-1.439c.958.235 2.005.416 3.106.534a23.87 23.87 0 0 0 2.035 2.446c-1.595 1.482-3.092 2.294-4.11 2.294a1.167 1.167 0 0 1-.552-.132m11.604-3.727c.23 1.869-.054 3.322-.715 3.708c-.146.088-.337.127-.562.127c-1.013 0-2.515-.807-4.11-2.28a23.01 23.01 0 0 0 2.021-2.44a22.843 22.843 0 0 0 3.111-.538c.113.494.2.968.255 1.423m1.883-3.263c-.42.181-.88.343-1.355.494a23.482 23.482 0 0 0-1.1-2.979c.45-1.017.811-2.01 1.085-2.964a15.3 15.3 0 0 1 1.375.499c1.732.738 2.852 1.707 2.852 2.475c-.005.768-1.125 1.742-2.857 2.475' />
                    <path d='M11.995 13.925a2.236 2.236 0 1 0 0-4.472a2.236 2.236 0 0 0 0 4.472' />
                  </g>
                  <defs>
                    <clipPath id='akarIconsReactFill0'>
                      <path fill='#fff' d='M0 0h24v24H0z' />
                    </clipPath>
                  </defs>
                </g>
              </svg>
            </li>
            <li className='place-self-center gap-2'>
              <p>Vue.js</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='50'
                height='50'
                viewBox='0 0 512 512'
              >
                <path
                  fill='currentColor'
                  d='M512 34.512L256 477.488L0 34.512h41.601L256 405.502l214.399-370.99zM256 135.247L196.818 34.512h-89.766L256 292.248L404.948 34.512h-89.766z'
                />
              </svg>
            </li>
            <li className='place-self-center gap-2'>
              <p>TypeScript</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='50'
                height='50'
                viewBox='0 0 32 32'
              >
                <path
                  fill='currentColor'
                  d='M0 16v16h32V0H0zm25.786-1.276a4.023 4.023 0 0 1 2.005 1.156c.292.312.729.885.766 1.026c.01.042-1.38.974-2.224 1.495c-.031.021-.156-.109-.292-.313c-.411-.599-.844-.859-1.505-.906c-.969-.063-1.594.443-1.589 1.292a1.26 1.26 0 0 0 .135.599c.214.443.615.708 1.854 1.245c2.292.984 3.271 1.635 3.88 2.557c.682 1.031.833 2.677.375 3.906c-.51 1.328-1.771 2.234-3.542 2.531c-.547.099-1.849.083-2.438-.026c-1.286-.229-2.505-.865-3.255-1.698c-.297-.323-.87-1.172-.833-1.229c.016-.021.146-.104.292-.188l1.188-.688l.922-.536l.193.286c.271.411.859.974 1.214 1.161c1.021.542 2.422.464 3.115-.156c.281-.234.438-.594.417-.958c0-.37-.047-.536-.24-.813c-.25-.354-.755-.656-2.198-1.281c-1.651-.714-2.365-1.151-3.01-1.854a4.236 4.236 0 0 1-.88-1.599c-.12-.453-.151-1.589-.057-2.042c.339-1.599 1.547-2.708 3.281-3.036c.563-.109 1.875-.068 2.427.068zm-7.51 1.339l.01 1.307h-4.167v11.839h-2.948V17.37H7.01v-1.281c0-.714.016-1.307.036-1.323c.016-.021 2.547-.031 5.62-.026l5.594.016z'
                />
              </svg>
            </li>
          </ul>
        </div>
        <div className='flex flex-col text-center'>
          <h3 className='text-2xl mb-8'>Les outils que j'utilise :</h3>
          <ul className='flex flex-row justify-center gap-12 max-md:grid max-md:grid-cols-2'>
            <li className='place-self-center gap-2'>
              <p>npm/pnpm</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='50'
                height='50'
                viewBox='0 0 128 128'
              >
                <path
                  fill='currentColor'
                  d='M32.287 14.902v30.685h29.908V14.902Zm32.899 0v30.685h29.909V14.902Zm32.905 0v30.685H128V14.902ZM65.186 48.656v30.688h29.909V48.656Zm32.905 0v30.688H128V48.656Zm-92.928 9.37c-.88 0-1.676.093-2.386.278c-.71.186-1.304.432-1.782.74a2.994 2.994 0 0 0-.74.72c-.17.262-.255.6-.255 1.017v11.114c0 .386.045.693.138.925c.092.247.232.44.417.58c.185.138.41.23.672.277c.278.046.585.07.925.07c.355 0 .703-.03 1.042-.093a5.19 5.19 0 0 0 .742-.14v-3.841a5.54 5.54 0 0 0 1.852.3c.88 0 1.674-.123 2.384-.37a4.884 4.884 0 0 0 1.852-1.112c.51-.51.904-1.134 1.182-1.874c.278-.741.415-1.606.415-2.594c0-1.035-.16-1.921-.485-2.662a5.083 5.083 0 0 0-1.344-1.877c-.571-.493-1.257-.856-2.06-1.087a8.531 8.531 0 0 0-2.569-.37Zm14.006 0c-.972 0-1.861.117-2.664.348c-.787.232-1.442.532-1.967.903a2.988 2.988 0 0 0-.74.717c-.17.262-.255.603-.255 1.02v6.945c0 .386.045.702.138.95c.108.23.255.415.44.554c.185.14.41.232.672.278c.278.046.587.07.927.07a7.22 7.22 0 0 0 1.017-.07c.34-.046.588-.092.742-.138v-8.035c.217-.154.47-.27.763-.347a3.82 3.82 0 0 1 .927-.115c.463 0 .825.116 1.087.347c.278.216.418.564.418 1.042v5.464c0 .386.047.702.14.95c.107.23.254.415.44.554c.184.14.407.232.67.278c.277.046.587.07.926.07c.355 0 .694-.024 1.018-.07c.34-.046.587-.092.742-.138v-7.247c0-1.359-.47-2.415-1.412-3.172c-.942-.771-2.285-1.157-4.029-1.157zm13.036 0c-.88 0-1.677.093-2.387.278c-.71.186-1.303.432-1.782.74a2.995 2.995 0 0 0-.74.72c-.17.262-.255.6-.255 1.017v11.114c0 .386.045.693.138.925c.093.247.232.44.417.58c.185.138.41.23.672.277c.278.046.586.07.925.07c.355 0 .703-.03 1.042-.093a5.19 5.19 0 0 0 .742-.14v-3.841a5.54 5.54 0 0 0 1.852.3c.88 0 1.675-.123 2.385-.37a4.884 4.884 0 0 0 1.852-1.112a5.197 5.197 0 0 0 1.18-1.874c.277-.741.417-1.606.417-2.594c0-1.035-.161-1.921-.485-2.662c-.325-.757-.774-1.383-1.345-1.877c-.57-.493-1.257-.856-2.06-1.087a8.531 8.531 0 0 0-2.568-.37zm13.773 0c-.849 0-1.667.117-2.454.348c-.772.232-1.42.532-1.945.903a3.204 3.204 0 0 0-.74.694c-.17.248-.254.578-.254.995v6.993c0 .386.045.702.137.95c.108.23.255.415.44.554c.185.14.41.232.672.278c.278.046.588.07.927.07c.355 0 .694-.024 1.018-.07c.34-.046.587-.092.742-.138v-8.127c.139-.077.307-.155.507-.232c.2-.093.442-.138.72-.138c.401 0 .74.109 1.017.325c.293.2.44.531.44.995v5.533c0 .386.047.702.14.95c.108.23.254.415.44.554c.185.14.41.232.672.278c.278.046.585.07.925.07c.34 0 .67-.024.995-.07c.34-.046.594-.092.764-.138v-7.85a.76.76 0 0 0-.022-.185c.123-.108.308-.207.555-.3c.246-.108.478-.162.694-.162c.448 0 .803.109 1.065.325c.262.2.395.531.395.995v5.533c0 .386.045.702.137.95c.108.23.255.415.44.554c.185.14.41.232.672.278c.278.046.588.07.927.07c.355 0 .694-.024 1.018-.07c.34-.046.587-.092.742-.138V62.31c0-.787-.132-1.451-.395-1.991c-.262-.556-.617-.996-1.065-1.32a4.164 4.164 0 0 0-1.504-.742a6.364 6.364 0 0 0-1.714-.23c-.818 0-1.52.099-2.107.3a6.933 6.933 0 0 0-1.55.765a4.434 4.434 0 0 0-1.6-.788a6.261 6.261 0 0 0-1.851-.277zm-40.677 3.08c.74 0 1.304.238 1.69.717c.4.48.602 1.211.602 2.2c0 1.898-.795 2.848-2.385 2.848c-.246 0-.478-.03-.694-.092a3.515 3.515 0 0 1-.603-.232v-5.094c.17-.092.371-.17.603-.232c.231-.077.494-.115.787-.115m27.041 0c.741 0 1.304.238 1.69.717c.401.48.602 1.211.602 2.2c0 1.898-.794 2.848-2.384 2.848a2.51 2.51 0 0 1-.695-.092a3.516 3.516 0 0 1-.602-.232v-5.094c.17-.092.37-.17.602-.232c.232-.077.494-.115.787-.115m-.055 21.307v30.685h29.908V82.413Zm32.899 0v30.685h29.909V82.413Zm32.905 0v30.685H128V82.413Z'
                />
              </svg>
            </li>
            <li className='place-self-center gap-2'>
              <p>Tailwind</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='52'
                height='52'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='M12 4.86c-3.174 0-5.157 1.587-5.95 4.76c1.19-1.587 2.578-2.182 4.165-1.785c.905.226 1.552.883 2.268 1.61C13.651 10.63 15 12 17.95 12c3.173 0 5.156-1.587 5.95-4.76c-1.19 1.587-2.579 2.182-4.165 1.785c-.906-.226-1.552-.883-2.27-1.61C16.3 6.23 14.95 4.86 12 4.86M6.05 12C2.876 12 .893 13.587.1 16.76c1.19-1.587 2.578-2.182 4.165-1.785c.905.226 1.552.883 2.269 1.61C7.7 17.77 9.05 19.14 12 19.14c3.173 0 5.156-1.587 5.95-4.76c-1.19 1.587-2.579 2.182-4.165 1.785c-.906-.226-1.552-.883-2.27-1.61C10.35 13.37 9 12 6.05 12'
                />
              </svg>
            </li>
            <li className='place-self-center gap-2'>
              <p>Git</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='50'
                height='50'
                viewBox='0 0 16 16'
              >
                <path
                  fill='currentColor'
                  d='M15.698 7.287L8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45l1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025a1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.03 1.03 0 0 0 0-1.457'
                />
              </svg>
            </li>
            <li className='place-self-center gap-2'>
              <p>GitHub</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='50'
                height='50'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='M11.963 2.382C.554 2.621-1.82 17.93 8.852 21.602c.498.093.684-.219.684-.478v-1.68c-2.79.601-3.38-1.317-3.38-1.317a2.603 2.603 0 0 0-1.121-1.442c-.902-.612.072-.602.072-.602a2.074 2.074 0 0 1 1.536 1.038a2.167 2.167 0 0 0 2.924.819c.052-.5.275-.965.633-1.317c-2.23-.25-4.564-1.1-4.564-4.875a3.755 3.755 0 0 1 1.038-2.645a3.464 3.464 0 0 1 .103-2.634s.84-.26 2.76 1.037a9.584 9.584 0 0 1 5.02 0c1.908-1.276 2.748-1.038 2.748-1.038c.365.828.398 1.763.093 2.614a3.754 3.754 0 0 1 1.037 2.645c0 3.786-2.344 4.626-4.574 4.865c1.038.55.602 4.086.664 4.522c0 .259.176.57.695.477c10.642-3.64 8.152-18.97-3.257-19.209'
                />
              </svg>
            </li>
            <li className='place-self-center gap-2'>
              <p>Figma</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='50'
                height='50'
                viewBox='0 0 15 15'
              >
                <path
                  fill='none'
                  stroke='currentColor'
                  d='M7.5 1v8.5m0 0v2a2 2 0 1 1-2-2m2 0h-2m0 0a2 2 0 1 1 0-4m0 0h2m-2 0h4m-4 0a2 2 0 1 1 0-4h4a2 2 0 1 1 0 4m0 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4Z'
                />
              </svg>
            </li>
            <li className='place-self-center gap-2'>
              <p>Postman</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='50'
                height='50'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428c6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099m2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453l-.307-.307l-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753m-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032a.06.06 0 0 1 .01-.073l.645-.645zm-2.803-.459l1.172-1.172l.879.878l-1.979.426a.074.074 0 0 1-.085-.039a.072.072 0 0 1 .013-.093m-3.646 6.058a.076.076 0 0 1-.069-.083a.077.077 0 0 1 .022-.046h.002l.946-.946l1.222 1.222zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934l-.294-.295l3.762-3.758l1.82-.393l.874.874c-1.255 1.102-2.971 2.201-5.1 3.268m5.279-3.428h-.002l-.839-.839l4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091m3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343m2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207l1.533-1.533c.661.72.637 1.832-.054 2.522m-.1-1.544a.143.143 0 0 0-.053.157a.416.416 0 0 1-.053.45a.14.14 0 0 0 .023.197a.141.141 0 0 0 .084.03a.14.14 0 0 0 .106-.05a.691.691 0 0 0 .087-.751a.138.138 0 0 0-.194-.033'
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
