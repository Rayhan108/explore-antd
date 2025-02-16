"use client";

import { Layout, Row, Col, Divider } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import styles from "./Footer.module.css";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Section */}
        <Row gutter={[32, 32]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <h3 className={styles.logo}>🚀 Exploring Antd</h3>
            <p>Building the future with innovative technology.</p>
          </Col>
          <Col xs={24} sm={12} md={8} >
            <h3>Quick Links</h3>
            <ul className={styles.links} >
              <li >
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={8} >
            <h3>Follow Us</h3>
            <div className={styles.socialIcons}>
              <Link href="https://facebook.com" target="_blank">
                <FacebookOutlined />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <TwitterOutlined />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <InstagramOutlined />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <LinkedinOutlined />
              </Link>
            </div>
          </Col>
        </Row>

        <Divider className={styles.divider} />

        {/* Bottom Section */}
        <Row justify="center">
          <Col xs={24} className={styles.copyright}>
            <p>© {new Date().getFullYear()} BrandName. All Rights Reserved.</p>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default AppFooter;
