

@group(0) @binding(0) var<storage, read> inputImage: array<u32>;
@group(0) @binding(1) var<storage, write> outputImage: array<u32>;

@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {
    let index = global_id.y * 256u + global_id.x;

    if (global_id.x >= 256u || global_id.y >= 448u) {
        return;
    }

    // Example: pass through input to output
    outputImage[index] = inputImage[index];
}