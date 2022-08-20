import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

const FavoriteButton = ({isFavorite, onPress}) => {
  return <Pressable onPress={onPress}>
      <Ionicons name={isFavorite ? "md-heart" : "md-heart-outline"} size={24} color="whitesmoke"/>
    </Pressable>
}

export default FavoriteButton;