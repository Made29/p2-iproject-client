<template>
    <tbody class="text-center">
        <tr>
            <th>{{ index + 1 }}</th>
            <td>{{ value.Code }}</td>
            <td>{{ value.Name }}</td>
            <td>{{ value.SectorName }}</td>
            <td>{{ value.Last }}</td>
            <td>{{ value.Volume }}</td>
            <td>
                <button></button>
            </td>
        </tr>
    </tbody>
</template>

<script>
export default {
    props: ["value", "index"]
};
</script>

<style lang="scss" scoped></style>
