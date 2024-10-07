import { useEffect, useState } from 'react'

const useDocTitle = (initialTitle: string) => {
  const [docTitle, setDocTitle] = useState(initialTitle)

  useEffect(() => {
    document.title = docTitle
  }, [docTitle])

  return [docTitle, setDocTitle]
}

export { useDocTitle }
