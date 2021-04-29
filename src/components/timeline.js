import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos";

export default function Timeline() {
  // we need to get the login photos
  const { photos } = usePhotos();
  return (
    <div className='container col-span-2'>
      <p>I am the timeline</p>
    </div>
  );
}
