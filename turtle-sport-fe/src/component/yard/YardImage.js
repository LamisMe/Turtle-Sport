import React, { useEffect, useRef, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../service/firebase/firebaseConfig";
import { showMsg, showMsgWarning } from "../../service/YardService";
import Swal from "sweetalert2";

function YardImage(props) {
  const { callBack } = props;
  const [files, setFiles] = useState([]);
  const [urls, setUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fileRef = useRef();
  const [filesUpload, setFilesUpload] = useState([]);

  const handleUpload = () => {
    setIsLoading(true);
    uploadFiles(files)
      .then()
      .catch()
      .finally(() => {
        fileRef.current.value = "";
      });
  };

  useEffect(() => {
    if (urls.length === files.length && urls.length > 0) {
      callBack(urls);
    }
  }, [urls]);

  const uploadFiles = async (files) => {
    if (files.length) {
      const temp = [...files];
      temp.splice(0, [...filesUpload].length);
      for await (const file of temp) {
        upload(file);
      }
      setFilesUpload(files);
    }
  };

  const upload = (file) => {
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      () => {},
      (err) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setUrls((prevUrls) => [...prevUrls, url]);
          setIsLoading(false);
        });
      }
    );
  };

  const handleAddFiles = (event) => {
    const typeFile = ["image/png", "image/jpg", "image/jpeg"];
    const MAX_SIZE_FILE = 1024000;
    let countInvalidType = 0;
    let countInvalidSize = 0;
    if (event.target.files && [...event.target.files].length > 0) {
      [...event.target.files].forEach((f) => {
        if (typeFile.includes(f.type)) {
          if (f.size > MAX_SIZE_FILE) {
            countInvalidSize++;
          } else {
            if (isExistsFile(files, f) === -1) {
              setFiles((prevFile) => [...prevFile, f]);
              fileRef.current.value = "";
            } else {
              showMsgWarning("Ảnh đã tồn tại");
            }
          }
        } else {
          countInvalidType++;
        }
      });
    }
    if (countInvalidType) {
      showMsgWarning(
        `Có ${countInvalidType} file không đúng định dạng file ảnh`
      );
    }
    if (countInvalidSize) {
      showMsgWarning(`Có ${countInvalidSize} file lớn hơn dung lượng cho phép`);
    }
  };

  const isExistsFile = (files, file) =>
    files.findIndex((f) => f.name === file.name);

  const handleDeleteFile = (name) => {
    const filesChange = files.filter(function (f) {
      return f.name !== name;
    });
    setFiles(filesChange);
  };

  const showSweetAlert = () => {
    let timerInterval;
    Swal.fire({
      title: "Đang upload ảnh",
      html: "Vui lòng chờ đợi trong vài giây.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        showMsg("Upload ảnh thành công");
      }
    });
  };

  return (
    <div>
      <div>
        <label htmlFor="upload">
          <span className="btn btn-outline-primary">Chọn ảnh tại đây</span>

          <input
            type="file"
            accept="image/*"
            multiple
            id="upload"
            onChange={(e) => handleAddFiles(e)}
            style={{ display: "none" }}
            ref={fileRef}
          />
        </label>
        <div className="row">
          {files.length > 0 &&
            files.map((file) => (
              <div
                style={{ width: "18rem", marginTop: "15px" }}
                key={file.name}
                className="col-6 card m-3"
              >
                <div className="card-body">
                  <button className="btn btn-outline"
                    style={{
                      textAlign: "right",
                      border: "none",
                      position: "absolute",
                    }}
                    onClick={() => handleDeleteFile(file.name)}
                    disabled={filesUpload.find((f) => f.name === file.name)}
                  >
                    <i
                      className="bi bi-x text-danger fw-bold fs-1"
                      hidden={filesUpload.find((f) => f.name === file.name)}
                    />
                  </button>
                  <img
                    className="card-img"
                    variant="top"
                    src={URL.createObjectURL(file)}
                    style={{
                      height: "230px",
                      width: "172.500",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
      <div>
        {files.length > 0 && (
          <button
            className="mt-4 btn btn-primary"
            variant="outline-dark"
            onClick={handleUpload}
            disabled={files.length === filesUpload.length}
          >
            <i className="bi bi-cloud-arrow-up" /> Tải ảnh lên
          </button>
        )}
        {isLoading && showSweetAlert()}
      </div>
    </div>
  );
}

export default YardImage;
