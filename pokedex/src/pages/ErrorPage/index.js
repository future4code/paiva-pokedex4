import ErrorCard from '../../components/ErrorCard/ErrorCard'
import Header from '../../components/Header/Header'
import {Container} from './styled'

function ErrorPage() {
    return (
      <div>
        <Header />
        <Container>
          <ErrorCard />
        </Container>
      </div>
    );
  }
  
  export default ErrorPage;