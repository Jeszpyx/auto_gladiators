import { Alert, AppShell, Button, Center, Grid, Table, Text } from "@mantine/core"
import { useEffect, useState } from "react"
import './App.css';
import archon from '/archon.png'
import silver from '/silver.png'
import gold from '/gold.png'
import iron from '/iron.png'


type TPlayer = {
  name: string
  image: string
}
function App() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [alert, setAlert] = useState<boolean>(false);
  const [rating, setRating] = useState<boolean>(false);


  const players: TPlayer[] = [
    { name: 'kLYv1K', image: gold },
    { name: 'Кай-Фу Ли', image: archon },
    { name: 'NASRAL V TAXI', image: silver },
    { name: 'Муравейка', image: iron },
  ]

  const rows = players.map((element, i) => (
    <Table.Tr key={i}>
      <Table.Td><b>{element.name}</b></Table.Td>
      <Table.Td><img
        src={element.image}
      /></Table.Td>
    </Table.Tr>
  ));


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);


    return () => clearTimeout(timer);
  }, []);


  if (isVisible) {
    return <img
      src="https://photobooth.cdn.sports.ru/preset/message/3/fe/6d7e5cbc04501a73207829bfa6da9.jpeg"
      className={`fade-image ${isVisible ? 'fade-in' : 'fade-out'}`}
    />
  } else {
    return (
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
        }}
        padding="md"
      >
        <AppShell.Header>
          <Center mah={60}>
            <Text size="50">AUTO GLADIATORS</Text>
          </Center>

        </AppShell.Header>


        <AppShell.Main>

          <Grid>
            <Grid.Col span={6}>
              {alert && <Alert variant="filled" color="rgba(255, 0, 0, 1)" withCloseButton title="Донатить может только Лёша!" >
                P.S. Лёша, хватит, мы тебе и так подкручиваем
              </Alert>}
              {rating && <Table>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Ник</Table.Th>
                    <Table.Th>Ранг</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
              </Table>}
            </Grid.Col>

            <Grid.Col span={6}>
              <Button.Group orientation="vertical" bottom={20} w={'30%'}>
                <Button variant="filled" disabled mb={15}>Играть (в разработке)</Button>
                <Button variant="filled" color="orange" mb={15} onClick={() => {
                  setAlert(false)
                  setRating(true)
                }}>Таблица рейтинга</Button>
                <Button variant="filled" color="orange" mb={15} onClick={() => {
                  setRating(false)
                  setAlert(true)
                }} >Задонатить</Button>

                <Button variant="filled" color="orange" mb={15} onClick={() => { window.close() }}>Выйти</Button>
              </Button.Group></Grid.Col>

          </Grid>

        </AppShell.Main>
      </AppShell>
    )
  }
}

export default App
