"use client";

import { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Checkbox,
  Radio,
  DatePicker,
  Switch,
  Upload,
  message,
} from "antd";
import { UploadOutlined, SendOutlined } from "@ant-design/icons";

const { Option } = Select;

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (data: any) => {
    setLoading(true);
    console.log("Form Submitted:", data);
    message.loading("Submitting your message...");
    
    // Fake API Call
    setTimeout(() => {
      message.success("Message sent successfully!");
      setLoading(false);
    }, 2000);
  };
  const [fileList, setFileList] = useState([]);

  const handleUploadChange = ({ fileList  }:any) => {
    setFileList(fileList);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="bg-white p-8 shadow-xl rounded-lg max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          📩 Contact Us
        </h2>

        <Form layout="vertical" onFinish={onFinish}>
          {/* Name */}
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input placeholder="John Doe" />
          </Form.Item>

          {/* Email */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Invalid email format!" },
            ]}
          >
            <Input placeholder="johndoe@example.com" />
          </Form.Item>

          {/* Phone */}
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[{ required: true, message: "Please enter your phone number!" }]}
          >
            <Input placeholder="+1 234 567 8901" />
          </Form.Item>

          {/* Subject */}
          <Form.Item label="Subject" name="subject">
            <Select placeholder="Select a subject">
              <Option value="support">Support</Option>
              <Option value="sales">Sales Inquiry</Option>
              <Option value="feedback">Feedback</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          {/* Message */}
          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please enter your message!" }]}
          >
            <Input.TextArea rows={4} placeholder="Write your message here..." />
          </Form.Item>

          {/* Contact Preference */}
          <Form.Item label="Preferred Contact Method" name="contactMethod">
            <Radio.Group>
              <Radio value="email">Email</Radio>
              <Radio value="phone">Phone</Radio>
            </Radio.Group>
          </Form.Item>

          {/* Subscribe to Newsletter */}
          <Form.Item name="subscribe" valuePropName="checked">
            <Checkbox>Subscribe to our newsletter</Checkbox>
          </Form.Item>

          {/* Available Date */}
          <Form.Item label="Best Date to Contact" name="contactDate">
            <DatePicker className="w-full" />
          </Form.Item>

          {/* Receive Promotional Offers */}
          <Form.Item label="Receive Promotional Offers" name="promotions" valuePropName="checked">
            <Switch />
          </Form.Item>

          {/* Upload Attachment */}
          <Form.Item label="Upload Attachment" name="attachment">
        <Upload
          fileList={fileList} // ✅ Use fileList instead of value
          onChange={handleUploadChange}
          beforeUpload={() => false} // Prevent auto-upload
        >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={<SendOutlined />}
              loading={loading}
              className="w-full bg-blue-500 hover:bg-blue-600"
            >
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
