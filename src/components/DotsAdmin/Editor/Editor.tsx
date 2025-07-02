"use client";

import {useRef, useMemo, useEffect, useState} from "react";
import ReactQuill, { Quill } from "react-quill-new";
import QuillTableBetter from "quill-table-better";
import "react-quill-new/dist/quill.snow.css";
import "quill-table-better/dist/quill-table-better.css";
import ResizeModule from "../../../lib/quill-resize-module-custom";
import { StyleAttributor, Scope } from "parchment";
import HtmlEditButton from "quill-html-edit-button";
import api from "../../../lib/api";
import "../../../assets/admin/editor.css";

//HTML 편집기 플러그인 등록
Quill.register("modules/htmlEditButton", HtmlEditButton);

// 폰트 사이즈 화이트리스트 등록
const Size: any = Quill.import("formats/size");
Size.whitelist = ["8px", "10px", "12px", "14px", "16px", "18px", "20px", "22px", "24px"];
Quill.register(Size, true);

// 테이블 플러그인 등록
Quill.register({ "modules/table-better": QuillTableBetter }, true);

// Resize 모듈 등록
Quill.register("modules/resize", ResizeModule);

// line-height 포맷 등록
const LineHeight = new StyleAttributor("lineheight", "line-height", {
  scope: Scope.BLOCK,
  whitelist: ["1.42", "1", "1.2", "1.5", "2", "2.5", "3"],
});
Quill.register(LineHeight, true);

interface Props {
  data : any
  // eslint-disable-next-line
  setData : Function
  // eslint-disable-next-line
  onChange : Function
}

export default function QuillEditor({data, setData, onChange}: Props) {
  const quillRef = useRef(null!);

  const handleImageUpload = async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await api.post("/admin/setToastFileUpload.php", formData);
        if (res?.data?.imageUrl) {
          const editor = (quillRef.current as ReactQuill).getEditor();
          const range = editor.getSelection(true);
          editor.insertEmbed(range?.index || 0, "image", res.data.imageUrl);
          editor.setSelection((range?.index || 0) + 1);
        }
      } catch (error) {
        console.error("이미지 업로드 실패:", error);
      }
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: 1 }, { header: 2 }, { header: 3 }],
          ["bold", "italic", "underline", "strike"],
          ["link", "image", "video"],
          [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ script: 'sub' }, { script: 'super' }],
          [{ direction: "rtl" }],
          [{ size: ["10px", "12px", "14px", "16px", "18px", "20px", "22px", "24px"] }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          [{ lineheight: ["1.42", "1", "1.2", "1.5", "2", "2.5", "3"] }],
          ["blockquote"],
          ["table-better"],
          ["clean"],
        ],
        handlers: {
          image: () => handleImageUpload(),
        },
      },
      htmlEditButton: {
        debug: true,
        msg: "HTML 소스를 편집하세요",
        okText: "적용",
        cancelText: "취소",
      },
      table: false,
      "table-better": {
        language: "en_US",
        menus: [
          "column",
          "row",
          "merge",
          "table",
          "cell",
          "wrap",
          "copy",
          "delete",
        ],
        toolbarTable: true,
      },
      resize: {
        embedTags: ['VIDEO', 'IFRAME'],
        tools: [
          'left', 'center', 'right', 'full',
          {
            text: 'Alt',
            verify (activeEle: any) {
              return (activeEle && activeEle.tagName === 'IMG')
            },
            handler (evt: any, button: any, activeEle: any) {
              let alt = activeEle.alt || ''
              alt = window.prompt('Alt for image', alt)
              if (alt == null) return
              activeEle.setAttribute('alt', alt)
            }
          }
        ]
      },
      keyboard: {
        bindings: QuillTableBetter.keyboardBindings,
      },
    }),
    []
  );

  // ✅ 기본 텍스트 사이즈를 16px로 강제
  useEffect(() => {
    const timer = setTimeout(() => {
      const editor = document.querySelector(".ql-editor");
      if (editor && !editor.classList.contains("ql-size-16px")) {
        editor.classList.add("ql-size-16px");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // 초기 텍스트 (비워둠)
  const initValue = () => {
    const html = data.description || '';
    const editor = (quillRef.current as ReactQuill).getEditor();
    const delta = editor.clipboard.convert({ html });
    const [range] = editor.selection.getRange();
    editor.updateContents(delta, Quill.sources.USER);
    editor.setSelection(
      delta.length() - (range?.length || 0),
      Quill.sources.SILENT
    );
    editor.scrollSelectionIntoView();
  };

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (quillRef.current && data?.description && !isInitialized) {
      initValue();
      setIsInitialized(true);
    }
  }, [data?.description, isInitialized]);


  useEffect(() => {
    const editor = (quillRef.current as ReactQuill).getEditor();
    const handler = () => {
      const html = editor.root.innerHTML;
      setData((prev: any) => ({ ...prev, description: html }));
      onChange(html);
    };
    editor.on("text-change", handler);

    return () => {
      editor.off("text-change", handler);
    };
  }, [setData, onChange]);

  return (
    <div className="quill-editor-wrapper">
      <p>내용 <span>*</span></p>
      <ReactQuill ref={quillRef} theme={"snow"} modules={modules} placeholder="내용을 입력해 주세요."/>
    </div>
  );
}
