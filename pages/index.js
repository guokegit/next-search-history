import Head from 'next/head'
import Image from 'next/image'
import {
  Box,
  InputGroup,
  Input,
  InputRightAddon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/core'
import { FaMicrophone, FaPlus } from 'react-icons/fa';
import React, {useState, useCallback} from 'react'
import styles from '../styles/Home.module.css'
import { AddHistory } from '../components/AddHistory'

export default function Home() {
  const [historys, setHistorys] = useState([{
    title: '拉钩',
    link: 'https://kaiwu.lagou.com',
    img: '/google-icon.png',
  }]);


  const { isOpen, onOpen, onClose } = useDisclosure();

  const submit = useCallback(history => {
    setHistorys(preHistory => [...preHistory, history])
  }, [])

  return (
    <div className={styles.home}>
      <Head>
        <title>next search history</title>
        <link rel="icon" href="/google-icon.png" />
      </Head>
      <Box w={600} p={50} m={'50px auto'} bgColor="#fff" boxShadow="lg" borderRadius="4px" algin="center">
        <Image src="/google-logo.jpeg" alt="Vercel Logo" width={400} height={100} />
        <InputGroup style={{margin: '24px 0'}}>
          <Input placeholder="在谷歌上搜索" name="search" borderRadius="20px" />
          <InputRightAddon children={<FaMicrophone />}  borderRadius="20px" />
        </InputGroup>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {
            historys.map(({title, link,  img}) => (
              <a target="_black"
                 key={link}
                 href={link}
                 className={styles.linkCard}
              >
                <div className={styles.icon}>
                  <img src={img} />
                </div>
                <div fontSize={13} >{title}</div>
              </a>

            ))
          }
          <a onClick={onOpen}
             className={styles.linkCard}
          >
            <div className={styles.icon}>
              <FaPlus />
            </div>
            <div>添加快捷方式</div>
          </a>
        </div>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>添加快捷连接</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddHistory submit={submit} onClose={onClose} />
          </ModalBody>

        </ModalContent>
      </Modal>




    </div>
  )
}
