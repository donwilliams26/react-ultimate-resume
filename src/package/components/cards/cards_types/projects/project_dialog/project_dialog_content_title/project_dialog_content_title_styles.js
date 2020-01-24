export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        container: {
            marginBottom: spacing * 4,
            textAlign: 'center'
        },
        typography: {
            fontSize: 32
        }
    });
};
