"use client";
import React from "react";
import { Button, Col, Form, Input, Row } from "antd";
import { motion } from "framer-motion";
// import RootLayout from "@/app/layout";

const Page = () => {
  return (
    <div className="h-screen grid grid-rows-[5rem_1fr]">
      <header className="flex items-center justify-between px-10">
        <img src={"/images/logo.png"} alt="" width={200} />
        <div className="hidden lg:flex justify-center items-center gap-1">
          <p className="text-[#333333] font-[gelionLight] font-bold">
            Don't have an account?
          </p>
          <Button
            type="text"
            className="py-5 border border-solid border-[#333333] flex items-center"
          >
            Sign up
          </Button>
        </div>
      </header>
      <main className="flex justify-center items-center">
        <motion.div
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            type: "spring",
            stiffness: 200,
          }}
          className="p-5 lg:p-20 h-[80%] w-[95%] max-w-[40rem]"
        >
          <h1 className="text-[#006E01] font-bold font-[gelionRegular] text-xl lg:text-3xl text-center lg:text-left">
            Sign in to your account
          </h1>

          <Form
            layout="vertical"
            wrapperCol={{ span: 24 }}
            className="my-[1.60rem]"
            // onFinish={handleLogin}
            fields={[
              {
                name: "email",
                value: "",
              },
              {
                name: "password",
                value: "state.request?.password",
              },
            ]}
          >
            <Row style={{ width: "100%" }}>
              <Col span={24}>
                <Form.Item
                  label={
                    <div className="font-semibold">Official Email Address</div>
                  }
                  rules={[
                    { required: true, message: "Email Address required" },
                  ]}
                  name="email"
                >
                  <Input
                    type="email"
                    value="{state.request?.officialMail}"
                    className="py-3"
                  />
                </Form.Item>
              </Col>
              <Col span={24} className="relative">
                <Form.Item
                  labelCol={{ span: 24 }}
                  name="password"
                  label={
                    <div className="w-full font-semibold flex justify-between items-center">
                      <p>Password</p>
                    </div>
                  }
                  rules={[{ required: true, message: "Password required" }]}
                >
                  <Input.Password
                    value="{state.request?.password}"
                    className="py-3"
                  />
                </Form.Item>
                <p
                  // onClick={() => navigate("/forgot-password")}
                  className="text-[#006E01] font-semibold absolute top-0 right-0 cursor-pointer hover:transition-all"
                >
                  Forgot password?
                </p>
              </Col>
              <Col span={24}>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  className={`flex items-center font-bold justify-center py-5 mx-auto bg-[#003701!important] text-white `}
                >
                  Sign In
                </Button>
              </Col>
            </Row>
          </Form>
          <div className="flex lg:hidden justify-center items-center gap-1">
            <p className="text-[#333333] font-[gelionLight] font-bold">
              Don't have an account?
            </p>
            <Button type="text" className="py-5 flex items-center">
              Sign up
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};
export default Page;

/*
          //! HERE 
          <Col span={24}>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
              className={`flex items-center font-bold justify-center py-5 mx-auto ${
                !state.btnDisabled
                  ? "hover:bg-[#003701!important] text-white"
                  : "text-[#ffffff!important] bg-[#E5E7E8!important]"
              }`}
              disabled={state.btnDisabled ? true : false}
            >
              Sign In
            </Button>
          </Col>
        </Row>
      </Form>
      <div className="flex lg:hidden justify-center items-center gap-1">
        <p className="text-[#333333] font-[gelionLight] font-bold">
          Don't have an account?
        </p>
        <Button type="text" className="py-5 flex items-center">
          Sign up
        </Button>
      </div> 
    </motion.div>
  );
};
*/