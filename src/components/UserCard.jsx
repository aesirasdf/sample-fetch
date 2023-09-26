import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

function UserCard(props) {
    return (
        
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.user.name}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.user.username}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.user.email}
                </Typography>
                <Typography variant="body2">
                    {props.user.phone}
                </Typography>
            </CardContent>
            <CardActions>
                <a target="_blank" href={`https://${props.user.website}`}>
                    <Button size="small">Learn More</Button>
                </a>
            </CardActions>
        </Card>
    )
}
export default UserCard