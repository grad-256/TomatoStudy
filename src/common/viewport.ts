{
  const ViewportEl = document.querySelector('meta[name="viewport"]')
  const MediaQueryList = window.matchMedia('(min-device-width: 375px)')

  const OnChangeQuery = (): void => {
    const ViewportContent = MediaQueryList.matches
      ? 'width=device-width, initial-scale=1'
      : 'width=375'

    ViewportEl?.setAttribute('content', ViewportContent)
  }

  MediaQueryList.addListener(OnChangeQuery)
  OnChangeQuery()
}
