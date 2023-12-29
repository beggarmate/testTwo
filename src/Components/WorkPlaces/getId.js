export default function getId() {
    return (
        Math.random() * 10 +
        Math.random() * Math.random() +
        Math.random() * 2
    ).toFixed(2);
}
