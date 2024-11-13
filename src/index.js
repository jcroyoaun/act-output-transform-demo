const core = require('@actions/core');

try {
    // Get input
    const text = core.getInput('text');
    const addTimestamp = core.getInput('add-timestamp') === 'true';

    // Do transformations
    const uppercase = text.toUpperCase();
    const lowercase = text.toLowerCase();
    const slug = text.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    const reversed = text.split('').reverse().join('');
    const charCount = text.length;

    // Set outputs
    core.setOutput('uppercase', uppercase);
    core.setOutput('lowercase', lowercase);
    core.setOutput('slug', slug);
    core.setOutput('reversed', reversed);
    core.setOutput('char-count', charCount);

    if (addTimestamp) {
        core.setOutput('timestamp', new Date().toISOString());
    }

} catch (error) {
    core.setFailed(error.message);
}
