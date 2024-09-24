'use client';

// import './styles.scss'
import '@/styles/tiptapeditor.css';

// import Document from '@tiptap/extension-document';
// import Paragraph from '@tiptap/extension-paragraph';
// import Text from '@tiptap/extension-text';
import { EditorContent, useEditor } from '@tiptap/react';
import React, { useEffect, useState } from 'react';
import StarterKit from '@tiptap/starter-kit';

export const TipTapEditor = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
      }, []);

      const editor = useEditor({
        extensions: [StarterKit],
        content: '<p>Hello World! 🌎️</p>',
      })     
    
  // const editor = useEditor({
  //   extensions: [
  //     Document,
  //     Paragraph,
  //     Text,
  //     StarterKit.configure({
  //       history: false,
  //       heading: {
  //         levels: [1, 2],
  //       },
  //     }),
  //   ],
  //   editorProps: {
  //       // Avoid rendering content until the editor is fully mounted
  //       // immediatelyRender: false,  // This line solves the SSR issue
  //     },
  //     onCreate: ({ editor }) => {
  //       // This callback is called when the editor is created
  //       editor.commands.setContent(`
  //         <p>
  //           This is a radically reduced version of Tiptap. It has support for a document, with paragraphs and text. That's it. It's probably too much for real minimalists though.
  //         </p>
  //         <p>
  //           The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.
  //         </p>
  //       `);
  //     },
  //   // content: `
  //   //   <p>
  //   //     This is a radically reduced version of Tiptap. It has support for a document, with paragraphs and text. That’s it. It’s probably too much for real minimalists though.
  //   //   </p>
  //   //   <p>
  //   //     The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.
  //   //   </p>
  //   // `,
  // })

  if (!isMounted) return null;

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  )
}