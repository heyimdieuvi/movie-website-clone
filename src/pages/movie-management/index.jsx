import React from "react";
import { useState } from "react";
import { Table, Button, Modal, Form, Input, Image, Upload } from "antd";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";
import uploadFile from "../../utils/upload";

function MovieManagement() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = React.useState([]);
  const columns = [
    {
      title: "Movie Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Poster",
      dataIndex: "poster_path",
      key: "poster_path",
      render: (poster_path) => <Image src={poster_path} width={200} />
    },
  ];

  async function fetchMovies() {
    const response = await axios.get(
      "https://66f961f6afc569e13a989d9d.mockapi.io/Movies"
    );
    console.log(response.data);
    setDataSource(response.data);
  }

  //using useEffect to fetch data from the API 1 time after the component is mounted

  //can not use async function directly in useEffect
  //so we need to create a new function and call it inside useEffect
  //useEffect will run the function inside it after the component is mounted
  //anonymous function inside useEffect will run when the component is unmounted
  // co the dung function () {} hoac () => {} de viet function
  //dau [] trong useEffect la dependency, neu co [] thi useEffect se chay 1 lan sau khi component duoc mounted
  React.useEffect(() => {
    fetchMovies();
  }, []);
  const handleOpenModal = () => {
    setIsModalVisible(true);
  };
  const handleCancelModal = () => {
    setIsModalVisible(false);
  };

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  const handleOk = () => {
    form.submit();
  };
  async function handleSubmit(values) {
    console.log(values);
    console.log(values.poster_path.file.originFileObj);
    const url = await uploadFile(values.poster_path.file.originFileObj);
    values.poster_path = url;
    console.log(values);
    const response = await axios.post("https://66f961f6afc569e13a989d9d.mockapi.io/Movies", values);
    setDataSource([...dataSource, values]);

    //clear form after submit
    form.resetFields();

    //hide Modal
    handleCancelModal();

    
  } //xu ly khi da submit forms

  return (
    <div>
      <Button type="primary" onClick={handleOpenModal}>
        {" "}
        Add new Movie{" "}
      </Button>
      <Table dataSource={dataSource} columns={columns} />
      <Modal
        open={isModalVisible}
        title="Add new movie"
        onCancel={handleCancelModal}
        onOk={handleOk}
      >
        <Form form={form} labelCol={{ span: 24 }} onFinish={handleSubmit}>
          <Form.Item label="Movie Name" name={"name"}>
            <Input />
          </Form.Item>
          <Form.Item label="Movie Description" name={"description"}>
            <Input.TextArea
              rows={4}
              placeholder="maxLength is 6"
              maxLength={6}
            />
          </Form.Item>
          <Form.Item label="Trailer" name={"trailer"}>
            <Input />
          </Form.Item>
          <Form.Item label="Category" name={"category"}>
            <Input />
          </Form.Item>
          <Form.Item label="Poster" name={"poster_path"}>
            <Upload
              // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              action="https://66f961f6afc569e13a989d9d.mockapi.io/Movies"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
      {previewImage && (
        <Image
          wrapperStyle={{
            display: "none",
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </div>
  );
}

export default MovieManagement;
