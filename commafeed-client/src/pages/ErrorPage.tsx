import { Trans } from "@lingui/macro"
import { Box, Button, Center, Container, createStyles, Group, Stack, Text, Title } from "@mantine/core"
import { Logo } from "components/Logo"
import { TbRefresh } from "react-icons/tb"

const useStyles = createStyles(theme => ({
    root: {
        paddingTop: 80,
    },

    label: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 120,
        lineHeight: 1,
        marginBottom: theme.spacing.xl * 1.5,
        color: theme.colors[theme.primaryColor][3],
    },

    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 32,
    },

    description: {
        maxWidth: 540,
        margin: "auto",
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl * 1.5,
    },
}))

export function ErrorPage(props: { error: Error }) {
    const { classes } = useStyles()

    return (
        <div className={classes.root}>
            <Container>
                <Stack>
                    <Center my="xl">
                        <Logo size={48} />
                        <Title order={1} ml="md">
                            CommaFeed
                        </Title>
                    </Center>
                </Stack>
                <Box className={classes.label}>
                    <Trans>Oops!</Trans>
                </Box>
                <Title className={classes.title}>
                    <Trans>Something bad just happened...</Trans>
                </Title>
                <Text size="lg" align="center" className={classes.description}>
                    {props.error.message}
                </Text>
                <Group position="center">
                    <Button size="md" onClick={() => window.location.reload()} leftIcon={<TbRefresh size={18} />}>
                        Refresh the page
                    </Button>
                </Group>
            </Container>
        </div>
    )
}
