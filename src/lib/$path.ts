export const pagesPath = {
  "todos": {
    $url: (url?: { hash?: string }) => ({ pathname: '/todos' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
