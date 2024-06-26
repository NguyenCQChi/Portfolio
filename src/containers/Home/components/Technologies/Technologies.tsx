import React from 'react';
import { 
  JavaOriginal, 
  JavascriptOriginal, 
  NodejsOriginalWordmark, 
  ReactOriginal, 
  PythonOriginal, 
  PytorchOriginalWordmark,
  NextjsOriginal,
  FirebaseOriginal,
  MysqlOriginalWordmark,
  MongodbOriginalWordmark,
  AndroidstudioOriginal,
  COriginal
} from 'devicons-react';

const Technologies = () => {
  return (
    <div className="w-screen h-fit py-20 px-32 bg-red-100 flex flex-col gap-16">
      <div className="h-full grid grid-cols-6 justify-items-center gap-10">
        <JavaOriginal size="100" />
        <JavascriptOriginal size="100" />
        <NodejsOriginalWordmark size="100" />
        <ReactOriginal size="100" />
        <PythonOriginal size="100" />
        <PytorchOriginalWordmark size="100" />
        <NextjsOriginal size="100" />
        <FirebaseOriginal size="100" />
        <MysqlOriginalWordmark size="100" />
        <MongodbOriginalWordmark size="100" />
        <AndroidstudioOriginal size="100" />
        <COriginal size="100" />
      </div>
    </div>
  )
}

export default Technologies