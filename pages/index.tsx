import DefaultLayout from '~/layouts/DefaultLayout'
import IndexContainer from '~/components/index/Index'
import { IndexContextProvider } from '~/context/IndexContext'

const Index = () => {
  return (
    <DefaultLayout>
      <IndexContextProvider>
        <IndexContainer />
      </IndexContextProvider>
    </DefaultLayout>
  )
}

export default Index
