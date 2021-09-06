import React from 'react';
import {
  Input,
  Stack,
  FormHelperText,
  ModalFooter,
  Button,
} from '@chakra-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const AddHistory = ({ submit, onClose }) => {

  const formik = useFormik({
    initialValues: {
      title: '',
      link: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().max(18, '标题不超过18位').required('标题不能空'),
      link: Yup.string().required('连接不能空'),
    }),
    onSubmit: history => {
      console.log(history)
      submit(history)
      onClose()
    }
  })


  return (
    <form>
      <Stack space={2}>
        <Input placeholder="标题" name="title" {...formik.getFieldProps('title')} />
        {formik.errors.title && <FormHelperText>{formik.errors.title}</FormHelperText>}

        <Input placeholder="连接" name="link" {...formik.getFieldProps('link')} />
        {formik.errors.link && <FormHelperText>{formik.errors.link}</FormHelperText>}

      </Stack>

      <ModalFooter>
        <Button variantColor="blue" mr={3} onClick={onClose}>
          取消
        </Button>
        <Button bgColor="#3194d0" color="#fff" onClick={formik.handleSubmit}>添加</Button>
      </ModalFooter>
    </form>
  )
}