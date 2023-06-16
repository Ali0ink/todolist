

export default function Checkbox({checked = false, onClick}) {
  return (
    <div onClick={onClick}>
        {!checked && (
            <div className="checkbox unchecked">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="m26 4h-20a2 2 0 0 0 -2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-20a2 2 0 0 0 -2-2zm-20 22v-20h20v20z" />
              <path d="m0 0h32v32h-32z" fill="none" />
            </svg>
          </div>
        )}
        {checked && (
            <div className="checkbox checked">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m0 0h24v24h-24z" fill="none" />
              <path d="m4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1-1v-16a1 1 0 0 1 1-1zm7.003 13 7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414z" />
            </svg>
          </div>
        )}
      
    </div>
  );
}
