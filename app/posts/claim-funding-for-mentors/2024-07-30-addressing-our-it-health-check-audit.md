---
title: Addressing our IT health check audit
description: How we ensure the grant funding is being used appropriately
date: 2024-07-30
tags:
  - auditing
  - ithc
---

We underwent an IT health check assessment before our public beta launch.

We use identical infrastructure and database systems as the other Becoming a teacher (BAT) services, so we did not need to repeat an assessment on these areas.

We did, however, perform a web application assessment.

## Overview

The audit identified 6 areas for improvement in our processes and systems. We take these findings seriously and have since addressed them.

The 6 areas can further be categorised into 2 medium-risk and 4 low-risk findings:

### Medium risk

1. Misconfigured HTTP security headers
2. Cookies not set with secure flag

### Low risk

1. Insecure TLS/SSL configuration
2. Concurrent logins permitted
3. Application does not use multi-factor authentication
4. Secure areas accessible using back button

## Findings

### Misconfigured HTTP security headers

The following security headers were identified as being missing in responses returned by the application:

> | HTTP Header             | Header purpose |
> | ----------------------- | -------------- |
> | Content-Security-Policy | The Content Security Policy (“CSP”) header defines content sources that are trusted and approved by the browser to load specific resources such as scripts. The header also defines how loaded resources may behave. The header assists in defending against cross-site scripting (“XSS”) and other code execution attacks. |

#### Resolution

We have set up the `Content-Security-Policy` header to ensure that only trusted sources are loaded. As we do not use third-party services, we only allow resources from our domain.

### Cookies not set with secure flag

> The cookie in the web application was found to lack the Secure flag, leaving it at risk of compromise. The cookie was identified as being responsible for controlling user sessions for the application.

#### Resolution

We have set the ‘Secure flag’ on the cookie to ensure it is only sent over HTTPS connections.

### Insecure TLS/SSL configuration

The TLS/SSL configuration on the hosts indicated below was found to be misconfigured. Due to the identified TLS/SSL configuration vulnerabilities varying in the severity of the risks they expose, this finding has been issued to highlight the significance of the most serious vulnerability identified. The following issues were identified:

> | TLS/SSL Issue | Issue Description |
> | ------------- | ----------------- |
> | Weak- or Medium-Strength Ciphers Supported | A cipher suite is a combination of authentication, encryption and message authentication code (MAC) algorithms. They are used to negotiate the security settings for an encrypted data transfer in addition to the transfer of data itself. Utilising weaker cipher suites increases the risk of an attacker being able to retrieve clear text information from an encrypted conversation. |
> | CBC Cipher Vulnerable to Cryptographic Timing Attack (LUCKY 13) | A timing side-channel attack against the message authentication code (MAC) check used by TLS algorithm may permit a suitably positioned attacker to retrieve the plaintext of the communication, subject to certain limitations. |

#### Resolution

The TLS/SSL cipher configuration is considered secure and within DfE risk appetite.

### Concurrent logins permitted

> It was identified that the application tested permitted a given user account to connect concurrently, over multiple simultaneous sessions. This was observed by utilising different browser clients to access the application at the same time, as shown in the evidence below.

#### Resolution

Concurrent logins are by intentional design. We have implemented a session timeout to ensure that sessions are not left open indefinitely.

### Application does not use multi-factor authentication

> The web application was identified as only using an email address and password to login. If credentials were stolen or attained via another attack such as social engineering, an attacker would gain access to the user’s account and the sensitive data within.

#### Resolution

The Claim funding for mentor training service uses DfE Sign In for authentication. Multi-factor authentication (MFA) is currently not supported.

### Secure areas accessible using the back button

> A browser back button can be used to view authenticated data if the browser is not closed post-logout. This could allow an attacker to view and modify sensitive data if they had access to a device which a user had not closed the browser on after using the application. Evidence of this can be seen in the responses below.

#### Resolution

Accessing secure areas with the back button is standard web browser behaviour. If the user uses the back button, they can view the browser-cached state of the last page they visited. They will not be presented with any updated or changed data since their browser cached the web page. As we have implemented a session timeout, they will not be able to refresh the page, navigate to a new page, or perform any data changes.

*[CBC]: Cipher block chaining
*[CSP]: Content security policy
*[HTTP]: HyperText transfer protocol
*[HTTPS]: HyperText transfer protocol secure
*[MAC]: message authentication code
*[MFA]: Multi-factor authentication
*[SSL]: Secure sockets layer
*[TLS]: Transport layer security
*[XSS]: Cross-site scripting
