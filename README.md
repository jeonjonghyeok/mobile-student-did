
# 블록체인 학생증 블록체인 기반 탈중앙화 자기 신원증명 모바일 학생증 서비스 서비스(어플)
- 팀 BCW(Block Chain World)
- 졸업 작품 및 캡스톤 교내 경진대회 참가작

## 프로젝트 개요
- 현대의 사회에서는 개인정보는 엄청난 가치를 가집니다. 하지만 개인정보 유출이 심각한데 그로인해서 개인정보 자기 주권이 중요해짐으로 DID(Decentralized-ID,탈중앙화 신원증명)을 이용하면 자신이 필요한정보만 암호화되어서 요청한 상대방에게 제출할수 있습니다. 따라서 안전한 개인정보 보안이 가능합니다. 그리고 개인정보는 블록체인네트워크에 암호화 되어 저장되었음으로 해킹 및 위·변조가 불가능합니다.



## 사용언어 및 도구(툴)
![file_type_pug_icon_130225](https://user-images.githubusercontent.com/48907339/101274975-9f9f7c80-37e5-11eb-900b-155cf441c721.png)
![file_type_js_official_icon_130509](https://user-images.githubusercontent.com/48907339/101194729-b6d55180-36a1-11eb-88b0-f3c91df05e55.png)![express_original_wordmark_logo_icon_146528](https://user-images.githubusercontent.com/48907339/101193677-4a0d8780-36a0-11eb-8abd-4704056f4f48.png)![nodejs_plain_wordmark_logo_icon_146410](https://user-images.githubusercontent.com/48907339/101194757-c05eb980-36a1-11eb-8f4e-0c571ab197f0.png)![file_type_vscode_icon_130084](https://user-images.githubusercontent.com/48907339/101195939-770f6980-36a3-11eb-9056-6369e19696ff.png)![mysql_plain_wordmark_logo_icon_146415 (4)](https://user-images.githubusercontent.com/48907339/101274991-bc3bb480-37e5-11eb-8817-91d93497d7de.png)

### 개발
- Android 와 IOS 둘다 지원하기위해서 React-native를 이용해서 크로스 플랫폼 어플리케이션을 구현하도록 하였습니다.
- Hyper-ledger indy 를 사용해 DID 네트워크를 구축하였습니다.
- 어플리케이션과 블록체인 부분은 연동은 아직 안된 상태입니다.(연동 예정)

## 구현화면
## `#1 첫화면`

![메인화면](https://user-images.githubusercontent.com/48907339/101288496-588fa680-383a-11eb-8190-031100d4e3ef.png)

- 어플리케이션에 접속하고 처음으로 나오는 화면입니다. 가져오기 또는 새로만들기를 통해 본인임을 인증할수있습니다.

## `#2 메인화면`

![인증완료](https://user-images.githubusercontent.com/48907339/101288561-95f43400-383a-11eb-9316-f6d9048f41f0.png)

- 인증을하고나면 학생 본인의 정보를 나타내는 화면입니다. PIN번호를 입력하는 화면으로 갈수있습니다.

## `#3 PIN번호 입력`

![비밀번호입력](https://user-images.githubusercontent.com/48907339/101288500-5c232d80-383a-11eb-8a0e-3bd56a971ca3.png)

- 핀번호를 입력하는 화면입니다. Library를 사용하였습니다.


## `#4 QR코드 화면`

![큐알코드](https://user-images.githubusercontent.com/48907339/101288498-5a596a00-383a-11eb-9aad-55cbf0a82019.png)

- 마지막 화면으로써 QR코드를 도서관이나 학교 또는 협력업체에 렌즈에 입력하는것으로 DID를 인증할 수 있도록 하였습니다.

## 수상내역

![우수상](https://user-images.githubusercontent.com/48907339/101288805-d0120580-383b-11eb-8ab8-e2194613609d.jpg)
- 2020.11.26 캡스톤 우수상 수상
