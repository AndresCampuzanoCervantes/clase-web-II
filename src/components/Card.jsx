import React from 'react'
import { CardActionArea, Typography, CardMedia, CardContent, Card } from '@mui/material';
const CardCustom = ({ name, description, thumbnail }) => {
    return (
        <Card sx={{ maxWidth: 345, m:2 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={`${thumbnail.path}.${thumbnail.extension}`}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

export default CardCustom;