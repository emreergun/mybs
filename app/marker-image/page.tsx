import ImageWithMarkers from "@/components/ImageWithMarkers";

const generateRandomMarkers = (numMarkers: number): { x: number, y: number }[] => {
  const markers = [{x:50,y:62},{x:40,y:32},{x:45,y:45},{x:22,y:45},{x:95,y:60}];
  return markers;
}

const MarkerImage: React.FC = () => {
  const markers = generateRandomMarkers(10); // Generate 10 random markers

  return (
    <div>
      <ImageWithMarkers 
        src="https://www.uno.edu/sites/default/files/2022-11/Master_Campus_Map_forUC_F22_Nov.jpg" // Replace with your image path
        alt="Description of the image"
        markers={markers}
      />
    </div>
  );
}

export default MarkerImage;