const {REACT_APP_PATH_DEV_URL,REACT_APP_PATH_URL,NODE_ENV} = process.env

export const pathUrl=(NODE_ENV === "production")
?REACT_APP_PATH_URL
:REACT_APP_PATH_DEV_URL

export const rootUrl=(NODE_ENV === "production")
?'/app'
:'/app'

export const Paths = {
  home:'/',
  dashboard: 'dashboard',
  website: 'website',
  WebContent: 'website/content',
  websiteContent: (base) => `${base}/content`,
  createPath: (base,path) => {
    return `${base}/${path}`
  }
}
