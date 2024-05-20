import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundInfo,
} from './styledComponnets'

const NotFound = () => (
  <>
    <NotFoundContainer>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
        alt="not found"
      />
      <NotFoundHeading>Page Not Found</NotFoundHeading>
      <NotFoundInfo>
        We are sorry, the page you requested could not be found
      </NotFoundInfo>
    </NotFoundContainer>
  </>
)

export default NotFound
