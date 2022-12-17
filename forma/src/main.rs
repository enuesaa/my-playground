use forma::{cpu, prelude::*};

/**
 * see https://github.com/google/forma/blob/main/forma/src/cpu/buffer/mod.rs
 */
fn main() {
    let mut buffer = vec![0; 4];
    let mut composition = Composition::new();
    let mut renderer = cpu::Renderer::new();
    let layer_cache = renderer.create_buffer_layer_cache().unwrap();
    renderer.render(
        &mut composition,
        &mut BufferBuilder::new(&mut buffer, &mut LinearLayout::new(1, 1 * 4, 1))
            .layer_cache(layer_cache.clone())
            .build(),
        RGBA,
        Color { r: 1.0, g: 1.0, b: 1.0, a: 1.0 },
        None,
    );

    assert_eq!(buffer, [255; 4]);

    println!("Hello, world!");
}
