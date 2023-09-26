import { Skeleton, Stack } from "@mui/material"

export default function SkeletonCard() {
    const Card = () => (
        <Stack spacing={1}>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
        </Stack>)
    const Times = (num) => {
        const arr = []
        for(let i = 0; i < num; i++){
            arr.push(i)
        }
        return (
            arr.map(a => <Card />)
        )
    }
    return (
        Times(10)
    )
}
