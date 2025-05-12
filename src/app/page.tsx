import { PizzaList } from "@/components/home/pizza-list";
import { Header } from "@/components/layout/header"
import { api } from "@/lib/axios";

export const Page = async () => {
  const pizzasReq = await api.get('/pizzas')
  const pizzas = pizzasReq.data.pizzas ?? []

  return (
    <div className="">
      <Header />
      <main className="container mx-auto mb-10">
        <PizzaList pizzas={pizzas} />
      </main>
    </div>
  )
}

export default Page;