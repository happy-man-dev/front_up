import { useEffect } from 'react'
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  Image
} from '@chakra-ui/react'
import api from './utils/api'

import logoImg from './assets/logo.png'
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'
import image4 from './assets/image4.png'

function App() {
  const handleRefresh = () => {
    window.location.reload()
  }

  useEffect(() => {
    const checkServer = async () => {
      try {
        await api('/ping', {
          method: 'HEAD',
          headers: {
            'Cache-Control': 'no-cache',
          },
        })
        // 接口请求成功，跳转（地址待填写）
        // window.location.href = ''
      } catch {
        console.log('服务器维护中，停留在当前页面')
      }
    }
    checkServer()
  }, [])

  const cards = [
    {
      title: 'Maintenance Content',
      desc: 'System service upgrades, version updates, stability optimization and maintenance of relevant foundational capabilities.',
      icon: image2,
    },
    {
      title: 'Scope of Impact',
      desc: 'The official homepage, main site access and partial front-end services may be temporarily unavailable.',
      icon: image3,
    },
    {
      title: 'Restoration Notice',
      desc: 'Services will resume automatically once maintenance concludes. Please refresh the page or revisit later.',
      icon: image4,
    },
  ]

  return (
    <Box
      minH="100vh"
      bg="#FAFAFC"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={6}
      py="100px"
    >
      <Container maxW="1200px">
        <Box>
          {/* Logo */}
          <Image
            src={logoImg}
            mb="40px"
          />

          {/* Top */}
          <Flex
            justify="space-between"
            align="flex-start"
            gap="40px"
            flexDir={{ base: 'column', lg: 'row' }}
          >
            <Box flex="1">
              <Heading
                fontSize={{ base: '36px', md: '48px' }}
                lineHeight="1.1"
                mb="20px"
                color="#181524"
              >
                System Under Upgrade
              </Heading>

              <Text
                color="#74737C"
                fontSize="14px"
                lineHeight="24px"
                w="730px"
                mt="16px"
              >
                To deliver more stable, secure and efficient trading services, ForX is undergoing system maintenance and version upgrades. During the maintenance window, the official homepage and partial main site services may be inaccessible temporarily.
              </Text>
            </Box>

            {/* 右侧插图占位 */}
            <Image
              src={image1}
              borderRadius="full"
              objectFit="cover"
              mt="-100px"
              ml="-80px"
            />
          </Flex>

          {/* Cards */}
          <Grid
            templateColumns={{
              base: '1fr',
              md: 'repeat(3, 1fr)',
            }}
            gap="20px"
          >
            {cards.map((item) => (
              <Card.Root
                key={item.title}
                borderRadius="16px"
                bg="white"
                border="1px solid"
                borderColor="#E5E5E5"
                boxShadow="none"
              >
                <Card.Body p="16px">
                  <Image
                    src={item.icon}
                    w="100px"
                    h="100px"
                    mb="12px"
                    objectFit="contain"
                  />

                  <Heading
                    fontSize="22px"
                    mb="10px"
                    color="#181524"
                  >
                    {item.title}
                  </Heading>

                  <Text
                    fontSize="14px"
                    color="#74737C"
                    lineHeight="22px"
                  >
                    {item.desc}
                  </Text>
                </Card.Body>
              </Card.Root>
            ))}
          </Grid>

          {/* Notice */}
          <Box
            mt="20px"
            bg="#FFF2ED"
            color="#F97316"
            borderRadius="8px"
            px="14px"
            py="10px"
            fontSize="13px"
          >
            Services are currently being processed. The exact recovery time
            will be confirmed once page access is restored. Thank you for
            your patience and understanding.
          </Box>

          {/* Button */}
          <Flex
            mt="80px"
            direction="column"
            align="center"
            justify="center"
          >
            <Button
              w="220px"
              h="48px"
              borderRadius="8px"
              bg="linear-gradient(90deg,#7B3FF2,#D93DFF)"
              color="#F8F7FA"
              onClick={handleRefresh}
              fontSize="16px"
              fontWeight="500"
            >
              Refresh
            </Button>

            <Text
              mt="14px"
              color="#A0A0A0"
              fontSize="12px"
            >
              If the page remains inaccessible, please try again later.
            </Text>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}

export default App
