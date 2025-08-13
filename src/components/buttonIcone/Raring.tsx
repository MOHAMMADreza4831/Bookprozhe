
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

type RatingProps = {
  rating?: number;
};

export default function Rating ({rating}:RatingProps) {

if (rating===undefined) return <StarBorderIcon sx={{color:"gold"}}/>
    if (rating<8) {
        
        return <StarHalfIcon sx={{color:"gold"}} />
    }
    if (8<=rating) {
    
        return <StarIcon sx={{color:"gold"}}/>
    }

  return null;


}