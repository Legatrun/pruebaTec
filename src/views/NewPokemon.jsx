import { Button, Form, Modal, Upload } from "antd";
import { ErrorMessage, Formik } from "formik";
import { Input as FormikInput, Select } from "formik-antd";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addPokemon } from "../app/pokeLocal/pokeSlice";

export const NewPokemon = ({ open, onClose }) => {
  const dispatch = useDispatch();

  return (
    <Modal
      title="Create new Pokemon"
      open={open}
      //   onOk={handleOk}
      okButtonProps={{
        style: {
          display: "none",
        },
      }}
      cancelButtonProps={{
        style: {
          display: "none",
        },
      }}
      onCancel={onClose}
      width={800}
      centered
      destroyOnClose
    >
      <Formik
        onSubmit={(values) => {
          console.log({ values });
          dispatch(
            addPokemon({
              genero: values.genero,
              id: values.id,
            })
          );
        }}
        enableReinitialize
        initialValues={{
          name: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          id: Yup.string().required("Id is required"),
          tipo: Yup.string().required("Typo is required"),
        })}
      >
        {({ handleSubmit, errors, touched }) => (
          <>
            <Form>
              <div className="form">
                <Form.Item
                  validateStatus={errors.name && touched.name && "error"}
                  help={<ErrorMessage name="name" />}
                >
                  <Upload
                    name="image"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    beforeUpload={() => {
                      return false;
                    }}
                  >
                    <Button>Seleccionar Imagen</Button>
                  </Upload>
                </Form.Item>
                <Form.Item
                  validateStatus={errors.id && touched.id && "error"}
                  help={<ErrorMessage name="id" />}
                >
                  <FormikInput name="id" placeholder="id" />
                </Form.Item>
              </div>
              <Form.Item
                validateStatus={errors.name && touched.name && "error"}
                help={<ErrorMessage name="name" />}
              >
                <FormikInput name="name" placeholder="Nombre" />
              </Form.Item>

              <Form.Item
                validateStatus={errors.tipo && touched.tipo && "error"}
                help={<ErrorMessage name="tipo" />}
              >
                <Select
                  name="tipo"
                  placeholder="Tipo"
                  options={[
                    {
                      label: "electrico",
                      value: "electrico",
                    },
                    {
                      label: "fuego",
                      value: "fuego",
                    },
                  ]}
                />
              </Form.Item>

              <div className="form">
                <Form.Item>
                  <FormikInput name="tamano" placeholder="Tamaño" />
                </Form.Item>
                <Form.Item>
                  <FormikInput name="genero" placeholder="Genero" />
                </Form.Item>
              </div>
            </Form>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "16px",
                justifyContent: "flex-end",
                paddingTop: "8px",
              }}
            >
              <Button type="primary" onClick={handleSubmit}>
                Cancelar
              </Button>
              <Button type="primary" onClick={handleSubmit}>
                Guardar
              </Button>
            </div>
          </>
        )}
      </Formik>
    </Modal>
  );
};

NewPokemon.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
