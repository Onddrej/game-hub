import { HStack, List, ListItem, Image, Text, Spinner, Box, Button } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import { Genre } from '../hooks/useGenres';

interface Props{
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: Props) => {
    const {data, isLoading, error} = useGenres();

    if (error) return null;

    if (isLoading) return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <Spinner />
        </Box>
    )

    return (
        <List> 
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image src={getCroppedImageUrl(genre.image_background)} boxSize="32px" borderRadius={8} objectFit="cover"/>
                        <Button fontSize="lg" variant="link" onClick={() => onSelectGenre(genre)}>
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    )
}

export default GenreList;