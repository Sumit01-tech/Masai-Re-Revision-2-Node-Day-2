# 📘 Day 2: HTTPS, Security & Authentication Basics

This document explains the fundamental concepts of HTTPS, encryption, certificates, cookies, and authentication mechanisms commonly used in web applications.

---

## 1. What is HTTPS? How does it differ from HTTP?

**HTTP (HyperText Transfer Protocol)** is a protocol used for communication between a client and a server where data is transmitted in plain text.

**HTTPS (HyperText Transfer Protocol Secure)** is HTTP layered over SSL/TLS, which encrypts data during transmission.

### Key Differences:

| Feature | HTTP | HTTPS |
|------|------|-------|
| Encryption | No | Yes |
| Security | Vulnerable to attacks | Secure |
| Port | 80 | 443 |
| Data Integrity | Not guaranteed | Guaranteed |
| Authentication | No | Server verified |

---

## 2. Explain SSL/TLS. What is the SSL Handshake Process?

**SSL (Secure Sockets Layer)** and **TLS (Transport Layer Security)** are cryptographic protocols used to secure communication over a network. TLS is the modern and more secure version of SSL.

### SSL/TLS Handshake Steps:
1. Client sends a **ClientHello**
2. Server responds with **ServerHello** and its certificate
3. Client verifies the certificate using a trusted CA
4. Client generates a session key
5. Session key is encrypted using the server’s public key
6. Secure communication begins using symmetric encryption

---

## 3. What is Encryption? Explain Symmetric vs Asymmetric Encryption

**Encryption** is the process of converting readable data into an unreadable format to prevent unauthorized access.

### Symmetric Encryption
- Same key is used for encryption and decryption
- Fast and efficient
- Example: AES

### Asymmetric Encryption
- Uses a public key for encryption and a private key for decryption
- More secure but slower
- Example: RSA

HTTPS uses asymmetric encryption to exchange keys and symmetric encryption for data transfer.

---

## 4. What are Certificates? What is a Certificate Authority (CA)?

A **digital certificate** is an electronic document that verifies the identity of a website and contains:
- Domain name
- Public key
- Certificate issuer
- Expiry date

A **Certificate Authority (CA)** is a trusted organization that issues and verifies certificates.

Examples: Let’s Encrypt, DigiCert, GlobalSign

---

## 5. Difference Between Authentication and Authorization

| Aspect | Authentication | Authorization |
|------|---------------|---------------|
| Meaning | Verifying identity | Granting permissions |
| Example | Login | Role-based access |
| Order | First | After authentication |

---

## 6. Explain Session-Based Authentication

Session-based authentication stores user session data on the server.

### How it Works:
1. User logs in with credentials
2. Server creates a session
3. Session ID is sent to client as a cookie
4. Cookie is sent with every request
5. Server validates the session ID

### Pros:
- Simple to implement
- Secure for small applications

### Cons:
- Difficult to scale
- Server-side memory usage

---

## 7. What are Cookies? Explain Cookie Security Attributes

Cookies are small pieces of data stored in the browser to maintain state.

### Important Security Attributes:
- **HttpOnly**: Prevents JavaScript access
- **Secure**: Sent only over HTTPS
- **SameSite**
  - `Strict`: Same-site only
  - `Lax`: Limited cross-site usage
  - `None`: Allows cross-site requests

---

## 8. What is Token-Based Authentication? How is it Different from Session-Based Authentication?

Token-based authentication uses tokens (e.g., JWT) stored on the client.

### Comparison:

| Feature | Session-Based | Token-Based |
|------|---------------|------------|
| Storage | Server | Client |
| Scalability | Low | High |
| Stateless | No | Yes |
| Common Use | Traditional apps | Modern APIs |

---

