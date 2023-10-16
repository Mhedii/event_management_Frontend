"use client";
import { Row, Col, Button } from "antd";
import loginImage from "../../assets/signup.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  id: string;
  password: string;
};

const SignUpPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (err) {}
  };

  return (
    <div>
      <Row
        justify={"center"}
        align={"middle"}
        style={{
          minHeight: "100vh",
        }}
      >
        <Col sm={12} md={10} lg={8}>
          <Image
            src={loginImage}
            width={500}
            style={{ width: "20rem" }}
            alt="login page"
          ></Image>
        </Col>

        <Col sm={12} md={8} lg={6}>
          <h1
            style={{
              margin: "15px 0px",
            }}
          >
            Create A New Account
          </h1>
          <div>
            <Form submitHandler={onSubmit}>
              <div>
                <FormInput
                  name="userName"
                  type="text"
                  size="large"
                  label="User Name"
                />
              </div>
              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <FormInput
                  name="email"
                  type="email"
                  size="large"
                  label="Email"
                />
              </div>
              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="Password"
                />
              </div>
              <div style={{ margin: "15px 0px" }}>
                <FormInput
                  name="role"
                  type="text"
                  size="large"
                  label="Role"
                  value={"client"}
                />
              </div>
              <div style={{ margin: "15px 0px" }}>
                <FormInput
                  name="contact"
                  type="text"
                  size="large"
                  label="Contact No"
                />
              </div>
              <div style={{ margin: "15px 0px" }}>
                <FormInput
                  name="address"
                  type="text"
                  size="large"
                  label="Address"
                />
              </div>
              <div style={{ margin: "15px 0px" }}>
                <FormInput
                  name="profileImg"
                  type="text"
                  size="large"
                  label="Image"
                />
              </div>

              <Button type="primary" htmlType="submit">
                Signup
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignUpPage;
