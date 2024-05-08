import { useState, useRef } from 'react';
import { useCollection, useSquid, useQuery } from '@squidcloud/react';
import './App.css';

interface Image {
  imageUrl: string;
}

const App = () => {
  // Ref for the hidden file input
  const fileInputRef = useRef<HTMLInputElement>(null);

  const squid = useSquid();
  const imageCollection = useCollection<Image>('images');
  const { data } = useQuery(imageCollection.query().dereference());
  const storage = squid.storage();

  // Function to simulate file upload process
  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    const fileName = file.name;
    const pathInBucket = `user/${fileName}`;

    await storage.uploadFile('user', file);
    const downloadUrl = (await storage.getDownloadUrl(pathInBucket)).url;
    if (data) {
      await imageCollection.doc('image').update({ imageUrl: downloadUrl });
    } else {
      await imageCollection.doc('image').insert({ imageUrl: downloadUrl });
    }
    // Reset the value so the same file can be uploaded again if needed
    event.target.value = '';
  };

  // Function to trigger the hidden file input click
  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      {data.length > 0 && <img src={data[0].imageUrl}></img>}
      <input
        type="file"
        style={{ display: 'none' }} // Hide the file input
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/jpeg, image/png, image/heic"
      />
      <button onClick={handleClick}>Upload File</button>
    </div>
  );
};

export default App;
